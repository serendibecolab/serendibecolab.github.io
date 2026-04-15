import sharp from "sharp";
import fs from "fs";
import path from "path";

const publicImagesDir = "public/images";

const formatMap = {
  ".jpeg": "webp",
  ".jpg": "webp",
  ".png": "webp",
};

function getWebpPath(originalPath) {
  const ext = path.extname(originalPath).toLowerCase();
  if (formatMap[ext]) {
    return originalPath.replace(/\.(jpeg|jpg|png)$/i, ".webp");
  }
  return originalPath;
}

function updateConfigReferences() {
  const configPath = "site.config.ts";
  if (!fs.existsSync(configPath)) return;

  let content = fs.readFileSync(configPath, "utf-8");
  let modified = false;

  const imageExtensions = [".jpg", ".jpeg", ".png"];
  imageExtensions.forEach((ext) => {
    const regex = new RegExp(`(["'])([^"']*\\${ext})(["'])`, "gi");
    if (regex.test(content)) {
      content = content.replace(regex, (match, p1, p2, p3) => {
        const webpPath = p2.replace(/\.(jpeg|jpg|png)$/i, ".webp");
        if (
          fs.existsSync(
            path.join("public", webpPath.replace("/images/", "/images/")),
          )
        ) {
          modified = true;
          return `${p1}${webpPath}${p3}`;
        }
        return match;
      });
    }
  });

  if (modified) {
    fs.writeFileSync(configPath, content);
    console.log("Updated site.config.ts references to WebP");
  }
}

async function convertImages() {
  if (!fs.existsSync(publicImagesDir)) {
    console.log("No images directory found");
    return;
  }

  const files = fs.readdirSync(publicImagesDir);
  const toConvert = files.filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return formatMap[ext] && !f.includes(".webp");
  });

  if (toConvert.length === 0) {
    console.log("No images to convert");
    return;
  }

  console.log(`Found ${toConvert.length} images to convert to WebP`);

  let updatedConfig = false;

  for (const file of toConvert) {
    const ext = path.extname(file).toLowerCase();
    const name = path.basename(file, ext);
    const inputPath = path.join(publicImagesDir, file);
    const outputPath = path.join(publicImagesDir, `${name}.webp`);

    try {
      await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
      console.log(`Converted: ${file} -> ${name}.webp`);
    } catch (err) {
      console.error(`Error converting ${file}:`, err.message);
    }
  }

  updateConfigReferences();

  console.log("Image conversion complete!");
}

convertImages();

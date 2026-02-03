
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'images');

async function optimizeImages() {
    if (!fs.existsSync(imagesDir)) {
        console.log('Directory public/images does not exist.');
        return;
    }

    const files = fs.readdirSync(imagesDir);
    let savedBytes = 0;

    console.log(`Found ${files.length} files in ${imagesDir}`);

    for (const file of files) {
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const filePath = path.join(imagesDir, file);
            const fileExt = path.extname(file);
            const fileName = path.basename(file, fileExt);
            const newFilePath = path.join(imagesDir, `${fileName}.webp`);

            try {
                const stats = fs.statSync(filePath);
                const originalSize = stats.size;

                console.log(`Optimizing ${file} (${(originalSize / 1024).toFixed(2)} KB)...`);

                await sharp(filePath)
                    .webp({ quality: 80 })
                    .toFile(newFilePath);

                const newStats = fs.statSync(newFilePath);
                const newSize = newStats.size;

                const saving = originalSize - newSize;
                savedBytes += saving;

                console.log(`✅ Created ${fileName}.webp (${(newSize / 1024).toFixed(2)} KB) - Saved ${((saving / originalSize) * 100).toFixed(1)}%`);

                // Optional: delete original if verified
                // fs.unlinkSync(filePath); 

            } catch (err) {
                console.error(`❌ Error optimizing ${file}:`, err);
            }
        }
    }

    console.log(`\nTotal saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
}

optimizeImages();

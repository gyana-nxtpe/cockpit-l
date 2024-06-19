import fs from 'fs';
import path from 'path';

const sourceFolder = path.join(__dirname, 'build', '1-static');
const destinationFolder = path.join(__dirname, '1-static');

// Check if the source folder exists
if (fs.existsSync(sourceFolder)) {
  // Check if the destination folder exists, create it if it doesn't
  if (!fs.existsSync(destinationFolder)) {
    fs.mkdirSync(destinationFolder);
  }

  // Get a list of files and subdirectories in the source folder
  const items = fs.readdirSync(sourceFolder);

  // Move each item to the destination folder
  items.forEach((item) => {
    const sourcePath = path.join(sourceFolder, item);
    const destinationPath = path.join(destinationFolder, item);

    // Perform the move operation
    fs.renameSync(sourcePath, destinationPath);

    console.log(`Moved: ${item}`);
  });

  // Remove the source folder (optional)
  fs.rmdirSync(sourceFolder);
  console.log('Source folder removed.');

  console.log('Move completed.');
} else {
  console.log('Source folder does not exist.');
}

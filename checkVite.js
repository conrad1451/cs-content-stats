const fs = require('fs');
const path = require('path');

function isVitePresent(projectRoot = process.cwd()) {
  const packageJsonPath = path.join(projectRoot, 'package.json');

  try {
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = packageJson.dependencies || {};
      const devDependencies = packageJson.devDependencies || {};

      return !!(dependencies.vite || devDependencies.vite);
    } else {
      return false; // package.json doesn't exist
    }
  } catch (error) {
    console.error('Error checking for Vite:', error);
    return false; // Error reading package.json or parsing JSON
  }
}

// Example usage:
if (isVitePresent()) {
  console.log('Vite is present in the project.');
} else {
  console.log('Vite is not present in the project.');
}
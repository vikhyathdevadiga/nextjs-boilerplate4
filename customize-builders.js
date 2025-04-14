import fs from 'fs/promises';
import path from 'path';

async function customizePackageJson() {
  const buildersDir = '.vercel/builders';
  const packageJsonPath = path.join(buildersDir, 'package.json');
  
  try {
    // Check if directory exists, create if not
    try {
      await fs.access(buildersDir);
    } catch (error) {
      console.log(`Creating directory: ${buildersDir}`);
      await fs.mkdir(buildersDir, { recursive: true });
    }
    
    // Read existing package.json or create new one
    let packageJson = {};
    try {
      const fileContent = await fs.readFile(packageJsonPath, 'utf8');
      packageJson = JSON.parse(fileContent);
      console.log('Existing package.json found');
    } catch (error) {
      console.log('No existing package.json found, creating new one');
    }
    
    // Update or add overrides section
    packageJson.overrides = {
      ...(packageJson.overrides || {}),
      "globby": "11.0.4"
    };
    
    // Write updated package.json
    await fs.writeFile(
      packageJsonPath, 
      JSON.stringify(packageJson, null, 2)
    );
    
    console.log(`Successfully updated ${packageJsonPath}`);
    console.log('Overrides section now contains:');
    console.log(packageJson.overrides);
  } catch (error) {
    console.error('Error updating package.json:', error);
  }
}

customizePackageJson();

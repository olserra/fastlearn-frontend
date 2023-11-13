import * as fs from "fs";

function searchForHydrationIssues(filePath: string): void {
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Check for <p> nested in another <p> tag
  const nestedPTagRegex = /<p\b[^>]*>.*<p\b[^>]*>/;
  if (nestedPTagRegex.test(fileContent)) {
    console.log(
      `Hydration Issue: <p> nested in another <p> tag in ${filePath}`
    );
  }

  // Check for <div> nested in a <p> tag
  const divInPTagRegex = /<p\b[^>]*>.*<div\b[^>]*>/;
  if (divInPTagRegex.test(fileContent)) {
    console.log(`Hydration Issue: <div> nested in a <p> tag in ${filePath}`);
  }

  // Check for interactive content nested issues
  const interactiveContentRegex = /<(a|button)\b[^>]*>.*<\1\b[^>]*>/;
  if (interactiveContentRegex.test(fileContent)) {
    console.log(`Hydration Issue: Interactive content nested in ${filePath}`);
  }

  // Check for checks like typeof window !== 'undefined'
  const typeofWindowRegex = /typeof window !== 'undefined'/;
  if (typeofWindowRegex.test(fileContent)) {
    console.log(
      `Hydration Issue: typeof window !== 'undefined' check in ${filePath}`
    );
  }

  // Check for usage of browser-only APIs like window or localStorage
  const browserOnlyAPIsRegex = /\bwindow\b|\blocalStorage\b/;
  if (browserOnlyAPIsRegex.test(fileContent)) {
    console.log(`Hydration Issue: Usage of browser-only APIs in ${filePath}`);
  }

  // Check for the meta tag to disable iOS data detection
  const iOSMetaTagRegex = /<meta\s+name="format-detection"\s+content="telephone=no, date=no, email=no, address=no"\s*\/>/;
  if (iOSMetaTagRegex.test(fileContent)) {
    console.log(`Hydration Issue: iOS meta tag detected in ${filePath}`);
  }
}

// Specify the path to your TypeScript file
const filePath = "path/to/your/file.tsx";

// Call the function to search for hydration issues
searchForHydrationIssues(filePath);

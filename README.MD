✅1.Install Playwright
 -`npm init playwright@latest`
 ✅2.Check if playwright is installed correctly
 -`npx playwright --help'
  ✅3. Run Auto generated files
  By default playwright runs in headless mode make it headed
   - `npx playwright test --headed`
   - `npx playwright test`
   ✅4. Report
   By default basic html report
    -`npx playwright show -report'
    ✅5. tests format:
     .spec.ts
    .test.ts
   ✅ 6. Run the created spec file
     `npx playwright test tests/demo/mytest.spec.ts --headed`
     ✅7.package json scripts
  "scripts": {
    "demo": "npx playwright test tests/demo/mytest.spec.ts --headed"
  }
  command to run in terminal:
  npm run demo




  

    Best Practice:
    Folders/Files Kebab-case Eg: page-objects/, file-helper.ts
    page and spec files - dot-seperated nopcommerce.e2e.spec.ts or nop.home.page.ts
    Classname: PascalCase- LoginPage
    Variable: camelCase: loginButton
    constants: UPPERCASE_NAME Eg: BASE_URL




   Points to Note:

   ctrl +Tilt -open terminal
   windows +(.) Dot for Emoji
   ctrl +K+0(zero) to collapse tests in specs

   

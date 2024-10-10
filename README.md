# Project Structure & Guidelines


## Folder Breakdown:
1. **api:** Handles all API calls. Contains the `baseApi.ts` for base configurations, using `RTK Query` for data fetching and caching.
2. **assets:** Contains all image assets, icons and fonts used throughout the application.
3. **components:** This folder contains reusable UI components. Subfolders are structured for specific feature sets:
- **atoms:** Small, fundamental components such as buttons, labels, etc.
- **form:** Contains reusable form-related components like `FormInput`, `FormWrapper`, and others to standardize form creation.
- **layouts:** Components related to page structure and layout.
- **Modal:** Pre-built modal components.
4. **constant** Stores constant variables and configurations used across the app.
5. **hooks:**  Custom hooks for handling reusable logic like modals `(useModal.ts)`
6. **pages:**  Holds components representing different app pages or routes.
7. **redux:** Redux store setup and slices. Manages global state using Redux Toolkit (RTK).
8. **routes:** Defines routing setup for the application.
9. **theme:** Contains theme-specific configurations such as colors and text variants.
10. **utils:** Utility functions and helpers used across various parts of the app.

## Components Usage:
1. **Text Components:** Instead of using HTML tags like `H1`, `H2`, and `P`, we use a custom `Text` component from `textVariant.ts`:
    - It helps standardize typography across the app, ensuring consistent font sizes, colors, and styles.

**Usage Example:**
```typescript
import { Text } from './path-to-text-component';

<Text variant="H1">This is a heading</Text>
<Text variant="P1">This is a paragraph</Text>
```
2. **Form Components:** Always use components from the `form` folder to handle forms.:

    - FormWrapper should wrap all form fields to ensure consistent styling and form handling.
    - FormInput, FormSelect, etc., are reusable components ensuring validation and consistency.

**Usage Example:**
```typescript
<FormWrapper>
  <FormInput label="Username" name="username" />
</FormWrapper>
```
## Technology Stack Explanation:

- **TypeScript:** Strong typing to reduce runtime errors and improve code quality with better autocompletion and refactoring support.
- **React:** Component-based architecture for building reusable, maintainable UI components with a virtual DOM for high performance.

- **Redux & RTK (Redux Toolkit) & RTK Query (Redux Toolkit Query) :**
    - **Why Redux:** Helps manage global application state (like user authentication) in a predictable manner.
    - **Why RTK:** It makes using Redux easier and better by providing handy tools (like createSlice and createAsyncThunk) to set things up quickly.
    - **Why RTK Query:** It simplifies how you get and store data from APIs, automatically handling things like caching and refreshing data, so your app stays in sync with the latest information.

- **Tailwind CSS & Ant Design (AntD):**
    - **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs without leaving your HTML/JSX.
    - **Ant Design:** A React UI library that provides out-of-the-box design components like modals, buttons, forms, and more. This ensures consistency across the app while speeding up development time.

- **React Hook Form & Zod for Validation:**
    - **React Hook Form:** Lightweight form library that provides easy form handling with minimal re-renders.
    - **Zod:** TypeScript-first schema validation library that integrates seamlessly with React Hook Form for form validation.


   ## Consistent `index.ts` Usage:

    - **Index File Structure:**
        - Every folder will have an `index.ts` file to export its contents. This approach simplifies imports and keeps the codebase organized.

        - By using `index.ts`, we can import components, hooks, or utilities from a folder without needing to specify individual files, making the code cleaner and more maintainable.


        **Usage Example:**
```bash
// File structure
src/
  components/
    Button/
      Button.tsx
      index.ts
    index.ts

// In `index.ts` of components folder
export * from './Button';

// In `index.ts` of Button folder
export * from './Button';

// Importing the Button component elsewhere
import { Button } from 'components';
```

## Update Yarn Packages
To ensure your project uses the latest versions of all packages, run the following command:


```
yarn upgrade-interactive --latest
```

This command opens an interactive prompt that allows you to selectively upgrade packages to their latest versions. You can review the available updates and choose which packages to upgrade, ensuring your project stays up-to-date while maintaining control over the upgrade process.





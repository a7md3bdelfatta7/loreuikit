This is React package for shared component library based on [Ionic](https://ionicframework.com/) and [Material Design](https://m3.material.io/) concepts!

### [Live Demo](https://65c50905b6cd6c7660b852ed-xcrhmdrpwf.chromatic.com/)

## How to use this package

install the package

```
npm i lore-uikit --save
```

import component

```
import {Button} from "lore-uikit";
```

then use the component

```
 <Button
    onClick={() => {
    //do anything
    }}
    label="Toggle Theme"
/>
```
## How to run it locally

after cloning this repo you have to run the following commands

### install Dependencies

```
npm install
```

### Build the library

```
npm run build
```

### Publish the library

```
npm publish
```

### Run storybook locally

```
npm run storybook
```

### Build storybook

```
npm run build-storybook
```

### Library folder structure

```
├── src
│   ├── components
|   │   ├── Button
|   |   │   ├── Button.tsx
|   |   │   └── index.ts
|   │   └── index.ts
│   ├── Shared
|   │   ├── enums
|   │   ├── styles
│   └── index.ts
├── package.json
└── package-lock.json
```

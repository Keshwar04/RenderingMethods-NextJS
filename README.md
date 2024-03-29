### Rendering Types

CSR, SSR, ISR, SSG rendering methods are implemented.

### Reusable component

Created common todo component for UI and reused in all rendering methods components.

### Reusable function

Created common function for fetching mock datas from [jsonplaceholder API](https://jsonplaceholder.typicode.com/todos) and passed for rendering based arguments.

### Arguments for Rendering types:

**`SSR`** - { cache: 'no-store' }
**`ISR`** - { next: { revalidate: 2 } } **Note: 2 is referred as a Seconds not Milliseconds**
**`SSG`** - { cache: 'force-cache' }

### Typescript

**Set type for todos component props**
**Set type for todos data list**


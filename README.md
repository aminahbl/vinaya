This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


### Dev notes

#### Sources

#### Data

(At least during development) project data lives in `data/v0/json/db_*` files and is taken a s the source of truth.

The data schema is also primarily maintained in `data/v0/json/xata_schema.json`, but there the Xata CLI [`schema` commands](https://xata.io/docs/getting-started/cli#schema) allow two way maintanence between raw json and the database. To update from json:

```sh
xata schema upload data/v0/json/xata_schema.json
```




Data updates can be sent to the database with:

```sh
npm run data-to-xata
```

##### Rule id anatomy: 

Adapted from SuttaCentral ids.

- **anatomy:** 
    `{root lang}-{tradition}-{rule set}-{rule category #}-{category prefix + rule number}` 
- **example**: `pli-tv-bi-1-pj001`
- **example expantion**:
    | Part              | Value     |
    | ----------------- | --------- |
    | lang              | Pali      |
    | tradition         | Theravada |
    | rule set          | bhikkhuni |
    | rule category no. | 1         |
    | category prefix   |           |
    | & rule # with     | pj001     |
    | trailing zeros    |           |


#### Services

| Name     | Service                                             |
| -------- | --------------------------------------------------- |
| Xata     | Database                                            |
| ImageKit | Image hosting, optimization                         |
|          | (in conjuction with `next/image`) & transformations |
| Prisma   | Site hosting                                        |




### Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



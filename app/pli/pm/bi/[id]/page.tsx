// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const rules = await fetch('https://.../rules').then((res) => res.json())
   
    return rules.map((rule: any) => ({
      id: rule.id,
    }))
  }
   
  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  export default function Page({ params }: any) {
    const { id } = params
    // ...
  }
// interface PageProps {
//   params: {
//     slug?: string[];
//   };
// }
type Props = Promise<{ slug: string[] }>

const Docs = async ({params}: {params: Props}): Promise<JSX.Element> => {
  const { slug } = await params;
  if(slug?.length == 2){
    return <h1>
      Viewing docs for feature {slug[0]} and concept {slug[1]}
    </h1>
  } else if(slug?.length == 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>
  }
  return (
    <div>
      <h1>Docs Home Page</h1>
    </div>
  )
}


export default Docs
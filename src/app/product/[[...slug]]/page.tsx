type DetailProductPageProps = { params: { slug: string[] } };

export default function DetailProductPage(props: DetailProductPageProps) {
  const { params } = props;
  return (
    <div>
      <h1>{params.slug ? "Detail Product" : "List Product"}</h1>
      {params.slug && (
        <>
          <p>Category : {params.slug[0]}</p>
          <p>Genre : {params.slug[1]}</p>
          <p>Id : {params.slug[2]}</p>
        </>
      )}
    </div>
  );
}

import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/010e3aea-def2-4fd4-90b1-3cc6f95dbc1c/NIKE+REACTGATO.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/010e3aea-def2-4fd4-90b1-3cc6f95dbc1c/NIKE+REACTGATO.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  const products = retrieveData("products");

  return NextResponse.json({ status: 200, message: "Success", data: products });
}

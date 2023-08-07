import { useMemo } from "react";
import Image, { type ImageProps } from "next/image";
import crypto from "crypto";

function getIKImgSrc(path: IKImageProps["src"]) {
  if (typeof path !== "string") {
    return "path is not a string";
  }

  const pathParts = path.split("/");
  const params = pathParts[0];
  const transformationPath = `${params}/${pathParts.slice(1).join("/")}`;

  const imgUrl = `${
    process.env.NEXT_PUBLIC_IK_ROOT_URL ?? ""
  }/${transformationPath}`;

  const signature = crypto
    .createHmac("sha1", process.env.IMAGEKIT_API_KEY ?? "")
    .update(`${transformationPath}${process.env.NEXT_PUBLIC_IK_TIMESTAMP}`)
    .digest("hex");

  return `${imgUrl}?ik-t=${process.env.NEXT_PUBLIC_IK_TIMESTAMP}&ik-s=${signature}`;
}

interface IKImageProps extends ImageProps {
  path: string;
  alt: string;
  width: number;
  height?: number;
}

/**
 * Renders an ImageKit image component from a signed `src` URL (eg. "https://ik.imagekit.io/tvm15igl7/tr:w-800:q-75/pli-tv-bi-vb/np001.png?ik-t=1691273508&ik-s=API_KEY").
 *
 * - The `src` prop is built of transformation params and image location. eg. "tr:w-800:q-75/pli-tv-bi-vb/np001.png".
 */
const IKImage = (props: IKImageProps) => {
  const { src: path, alt, width, height, ...rest } = props;

  const imgSrc = useMemo(() => getIKImgSrc(path), [path]);

  return (
    <Image src={imgSrc} alt={alt} width={width} height={height} {...rest} />
  );
};

export default IKImage;

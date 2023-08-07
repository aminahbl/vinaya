import { useMemo } from "react";
import Image, { type ImageProps } from "next/image";
import crypto from "crypto";

interface Props {
  path: string;
  transformations: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

function getIKImgSrc(
  path: Props["path"],
  transformations: Props["transformations"]
) {
  const imgUrl = `${
    process.env.NEXT_PUBLIC_IK_ROOT_URL ?? ""
  }/${transformations}${path}`;

  const signature = crypto
    .createHmac("sha1", process.env.IMAGEKIT_API_KEY ?? "")
    .update(`${transformations}${path}${process.env.NEXT_PUBLIC_IK_TIMESTAMP}`)
    .digest("hex");

  return `${imgUrl}?ik-t=${process.env.NEXT_PUBLIC_IK_TIMESTAMP}&ik-s=${signature}`;
}

/**
 * Renders an ImageKit image component from a signed `src` URL (eg. "https://ik.imagekit.io/tvm15igl7/tr:w-800:q-75/pli-tv-bi-vb/np001.png?ik-t=1691273508&ik-s=API_KEY").
 *
 * - The `src` prop is built of transformation params and image location. eg. "tr:w-800:q-75/pli-tv-bi-vb/np001.png".
 */
const IKImage = (props: Props) => {
  const { path, transformations, alt, width, height, ...rest } = props;

  const imgSrc = useMemo(
    () => getIKImgSrc(path, transformations),
    [path, transformations]
  );

  return (
    <Image src={imgSrc} alt={alt} width={width} height={height} {...rest} />
  );
};

export default IKImage;

"use client";

import Image, { type ImageProps } from "next/image";
import crypto from "crypto";

interface LoaderProps {
  src: string;
}

function imageKitLoader({ src }: LoaderProps) {
  const srcParts = src.split("/");
  const params = srcParts[0];
  const transformationPath = `${params}/${srcParts.slice(1).join("/")}`;

  const imgUrl = `${
    process.env.NEXT_PUBLIC_IK_ROOT_URL ?? ""
  }/${transformationPath}`;

  const expiryTimestamp =
    parseInt((new Date().getTime() / 1000).toString(), 10) + 999999;

  const signature = crypto
    .createHmac("sha1", process.env.IMAGEKIT_API_KEY ?? "")
    .update(`${transformationPath}${expiryTimestamp}`)
    .digest("hex");

  return `${imgUrl}?ik-t=${expiryTimestamp}&ik-s=${signature}`;
}

interface IKImageProps extends ImageProps {
  src: string;
  alt: string;
  width: number;
  height?: number;
}

/**
 * Renders an ImageKit image component using a custom loader function returning a signed URL (eg. "https://ik.imagekit.io/tvm15igl7/tr:w-800:q-75/pli-tv-bi-vb/np001.png?ik-t=1691273508&ik-s=API_KEY").
 *
 * - The `src` prop is built of transformation params and image location. eg. "tr:w-800:q-75/pli-tv-bi-vb/np001.png".
 */
const IKImage = (props: IKImageProps) => {
  const { src, alt, width, height, ...rest } = props;

  return (
    <Image
      loader={imageKitLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...rest}
    />
  );
};

export default IKImage;

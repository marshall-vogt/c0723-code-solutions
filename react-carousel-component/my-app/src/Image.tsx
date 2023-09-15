export type ImageProp = {
  image: string;
};

export default function Image({ image }: ImageProp) {
  return (
    <div className="column-full banner">
      <img src={image} />
    </div>
  );
}

export type ImageProps = {
  image: string;
};

export default function Image({ image }: ImageProps) {
  return (
    <div className="column-full banner">
      <img src={image} />
    </div>
  );
}

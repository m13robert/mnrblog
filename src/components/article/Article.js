import Title from "../title/Title";
import Paragraph from "../paragraph/Paragraph";

export default function Article({ title, content }) {
  return (
    <div>
      <Title text={title} />
      <Paragraph text={content} />
    </div>
  );
}

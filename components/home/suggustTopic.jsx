import Section from '../Section/Section';
import Blog from '../Blog/Blog';

const SuggustTopic = ({ Topic, Children }) => {
  return (
    <>
      <div className="mb-8">
        <Section context={Topic} />
        {Children}
      </div>
    </>
  );
};

export default SuggustTopic;

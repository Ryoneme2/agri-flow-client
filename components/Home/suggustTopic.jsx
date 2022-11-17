import Section from '../Section/Section';
import Blog from '../Blog/Blog';

const SuggustTopic = ({ Topic, children }) => {
  return (
    <>
      <div className="mb-8">
        <Section context={Topic} />
        {children}
      </div>
    </>
  );
};

export default SuggustTopic;

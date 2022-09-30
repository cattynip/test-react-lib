import TestButton from './components/TestButton';

interface ITestProps {
  title?: string;
  buttonContents: string;
}

const Test = ({ title, buttonContents }: ITestProps) => {
  return (
    <div>
      {title ? <h1>{title}</h1> : null}
      <TestButton contents={buttonContents} />
    </div>
  );
};

export default Test;

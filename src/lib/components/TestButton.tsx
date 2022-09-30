interface ITestButtonProps {
  contents: string;
}

const testButton = (props: ITestButtonProps) => {
  return (
    <div>
      <button>{props.contents}</button>
    </div>
  );
};

export default testButton;

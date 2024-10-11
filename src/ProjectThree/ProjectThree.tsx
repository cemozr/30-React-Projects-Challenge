const items: string[] = ["item1", "item2", "item3", "item4", "item5"];

export const ProjectThree = () => {
  return (
    <div>
      <ul>
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

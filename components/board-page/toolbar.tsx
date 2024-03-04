const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <ul className="bg-neutral-100 rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <li>Pencil</li>
        <li>Square</li>
        <li>Circle</li>
      </ul>
      <ul className="bg-neutral-100 rounded-md p-1.5 flex flex-col items-center shadow-md">
        <li>Undo</li>
        <li>Redo</li>
      </ul>
    </div>
  );
};

export default Toolbar;

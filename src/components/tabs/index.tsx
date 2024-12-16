type TabsProps = {
  onTabChange: (tab: string) => void; // ประเภทของ onTabChange
};

const Tabs: React.FC<TabsProps> = ({ onTabChange }) => {
  const tabs = ["Overview", "Details", "Reviews"]; // ตัวอย่างแท็บ

  return (
    <div className="flex gap-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className="py-2 px-4 font-semibold text-white bg-blue-500 hover:bg-blue-600"
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

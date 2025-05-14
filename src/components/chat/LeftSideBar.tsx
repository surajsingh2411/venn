import React from 'react';

const LeftSidebar: React.FC = () => {
  return (
    <div className="invisible md:visible w-64 h-screen bg-white fixed top-0 left-0 flex flex-col z-50">
      <div className="p-4 text-xl font-semibold border-b border-gray-300 text-blue-700 bg-gray-50">
        Venn
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        <div className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">Google</div>
        <div className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">Salesforce</div>
        <div className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">GitHub</div>
        <div className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">Slack</div>
        <div className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">Notion</div>
        <div className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer">Zoom</div>
      </div>
    </div>
  );
};

export default LeftSidebar;

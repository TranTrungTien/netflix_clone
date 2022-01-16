import User from "../../User";
import Input from "../../Input";
import "./user_opt.css";
const UserOpt = () => {
  return (
    <div className="flex items-center space-x-6 text-gray-300">
      <Input />
      <div className="text-xl cursor-pointer hover:text-gray-100 relative custom-style-notification-container">
        <i className="fas fa-bell"></i>
        <div className="absolute top-10 right-0 w-max h-32 text-sm rounded-md text-gray-100 overflow-y-scroll custom-style-notification">
          <div className="p-3 flex flex-col h-auto flex-nowrap  space-y-3">
            <div className="flex justify-start items-start space-x-6 border-b border-gray-300 pb-2">
              <div className="w-40 h-18">
                <img
                  src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
                  alt="notification"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-max flex flex-col space-y-4">
                <p className="w-full text-sm">Lorem ipsum dolor sit, amet</p>
                <span className="text-gray-300 text-xs">1 minute ago</span>
              </div>
            </div>
            <div className="flex justify-start items-start space-x-6 border-b border-gray-300 pb-2">
              <div className="w-40 h-18">
                <img
                  src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
                  alt="notification"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-max flex flex-col space-y-4">
                <p className="w-full text-sm">Lorem ipsum dolor sit, amet</p>
                <span className="text-gray-300 text-xs">1 minute ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <User />
      <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-100 relative custom-style-previews-container">
        <div className="text-2xl">
          <i className="fas fa-bars"></i>
        </div>
        <i className="fas fa-caret-down"></i>
        <div className="absolute top-10 right-0 py-5 px-10 rounded-md cursor-default custom-style-previews">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="flex justify-between items-center space-x-12 w-full">
              <span className="text-sm font-medium">Previews</span>
              <div className="w-16 h-7 bg-gray-500 rounded-full cursor-pointer relative">
                <span className=" w-6 h-6 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-1"></span>
              </div>
            </div>
            <p className="text-xs text-left w-full text-gray-100 font-light">
              Previews won't play while browsing
            </p>
            <hr style={{ width: "100%", borderColor: "white" }} />
            <div className="flex justify-between items-center space-x-12 w-full">
              <span className="text-sm font-medium">Sound</span>
              <div className="w-16 h-7 bg-gray-500 rounded-full cursor-pointer relative">
                <span className=" w-6 h-6 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-1"></span>
              </div>
            </div>
            <p className="text-xs text-left w-full text-gray-100 font-light">
              Sound is off while browsing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOpt;

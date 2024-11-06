import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../../assets/logo.png"

function Footer() {
    const Aboutdata = [
      { id: 1, name: "About Us", click: "https://www.justswish.in/about" },
      { id: 2, name: "Features", click: "https://www.justswish.in/features" },
      { id: 3, name: "News", click: "https://www.justswish.in/news" },
      { id: 4, name: "Menu", click: "https://www.justswish.in/menu" },
    ];

    const companydata = [
      { id: 1, name: "Why Swish?", click: "https://www.justswish.in/why-swish" },
      { id: 2, name: "Partner With Us", click: "https://www.justswish.in/partner" },
      { id: 3, name: "FAQ", click: "https://www.justswish.in/faq" },
      { id: 4, name: "Blog", click: "https://www.justswish.in/blog" },
    ];

    const supportdata = [
      { id: 1, name: "Account", click: "https://www.justswish.in/account" },
      { id: 2, name: "Support Center", click: "https://www.justswish.in/support" },
      { id: 3, name: "Feedback", click: "https://www.justswish.in/feedback" },
      { id: 4, name: "Contact Us", click: "https://www.justswish.in/contact" },
      { id: 5, name: "Accessibility", click: "https://www.justswish.in/accessibility" },
    ];

    return (
      <div className="py-10 px-5 md:px-16 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-3">
              <img width="100px" src={logo} alt="logo" />
              <h2 className="text-2xl font-bold text-[#34C363]">Swish</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our job is to fill your tummy with delicious food and provide fast, free delivery.
            </p>
            <div className="flex space-x-3 text-gray-500">
              <Instagram className="hover:text-[#34C363] cursor-pointer" />
              <Facebook className="hover:text-[#34C363] cursor-pointer" />
              <a  target="_blank" href=" https://x.com/justswishin">  <Twitter className="hover:text-[#34C363] cursor-pointer" /></a>
            
            </div>
            <p className="text-sm text-gray-600">
              Building in public at{" "}
              <a className="text-[#34C363] font-bold" href="https://x.com/Akxxhil">
                @Akxxhil
              </a>
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-lg text-[#34C363]">About</h3>
            {Aboutdata.map((item) => (
              <a key={item.id} href={item.click} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#34C363] cursor-pointer">
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-lg text-[#34C363]">Company</h3>
            {companydata.map((item) => (
              <a key={item.id} href={item.click} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#34C363] cursor-pointer">
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-lg text-[#34C363]">Support</h3>
            {supportdata.map((item) => (
              <a key={item.id} href={item.click} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#34C363] cursor-pointer">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Footer;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer } from "lucide-react";
import OnlineIcon from "../../images/Icons/Laptop with cursor.png";
import OnsiteIcon from "../../images/Icons/Meeting Room.png";
import Consulting from "../../images/Icons/Training.png";
import { Link } from "react-router-dom";


import { Badge } from "@/components/ui/badge";
import AnimatedButton from "@/components/ui/AnimatedButton"; // Make sure this path matches your actual file structure

const MainService = ({
  tabs = [
    {
      value: "tab-1",
      icon: <img src={OnlineIcon} className="h-4 w-4" />,
      label: "Boost Revenue",
      content: {
        badge: "Modern Tactics",
        title: "Make your site a true standout.",
        description:
          "Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.",
        buttonText: "See Plans",
        imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Higher Engagement",
      content: {
        badge: "Interactive Learning",
        title: "Boost your site with top-tier design.",
        description:
          "Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.",
        buttonText: "See Tools",
        imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Stunning Layouts",
      content: {
        badge: "Elite Solutions",
        title: "Build an advanced web experience.",
        description:
          "Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.",
        buttonText: "See Options",
        imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
        imageAlt: "placeholder",
      },
    },
  ],
}) => {
  return (
    <section>
      <div className="container mx-auto">
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-[#f5f5f5] data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-[#f5f5f5] p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>
                  <div className="mt-2.5">
                  <Link to={tab.content.link}>
                  <AnimatedButton label={tab.content.buttonText} />
                  </Link>
                  </div>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { MainService };

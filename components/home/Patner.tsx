import { Button } from "@/components/ui/button";
import { DribbbleIcon, TwitchIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "John Doe",
    title: "Founder & CEO",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    imageUrl:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jane Doe",
    title: "Engineering Manager",
    bio: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    imageUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Bob Smith",
    title: "Product Manager",
    bio: "Former PM for Linear, Lambda School, and On Deck.",
    imageUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Peter Johnson",
    title: "Frontend Developer",
    bio: "Former frontend dev for Linear, Coinbase, and Postscript.",
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Patner = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col justify-center py-8 sm:py-16 gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <b className="text-center text-muted-foreground text-base font-semibold">
            Tim Kami!
          </b>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Kenali Tim Kami
          </h2>
          <p className="mt-6 text-base sm:text-lg">
            Filosofi kami sederhana — rekrut tim yang beragam dan penuh semangat,
            lalu ciptakan budaya yang memberdayakan setiap orang untuk memberikan
            karya terbaiknya.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center bg-accent py-8 px-6 rounded-lg"
            >
              <Image
                src={member.imageUrl}
                alt={member.name}
                className="shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover bg-accent"
                width={120}
                height={120}
              />
              <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.title}</p>
              <p className="mt-2 mb-6">{member.bio}</p>
              <div className="mt-auto flex items-center gap-4">
                <Link href="#" target="_blank">
                  <TwitterIcon className="stroke-muted-foreground h-5 w-5" />
                </Link>
                <Link href="#" target="_blank">
                  <DribbbleIcon className="stroke-muted-foreground h-5 w-5" />
                </Link>
                <Link href="#" target="_blank">
                  <TwitchIcon className="stroke-muted-foreground h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default Patner;

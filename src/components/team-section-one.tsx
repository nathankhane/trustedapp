import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const members = [
  {
    src: "/publicimages/logos/IMG_1525.jpg",
    name: "Nathan Morales",
    role: "Co-Founder & CEO",
  },
  {
    src: "/publicimages/logos/Dipesh advisor photo.jpg",
    name: "Dipesh Desai",
    role: "Co-founder and CTO",
  },
];

export default function TeamSection() {
  return (
    <section>
      <div className="bg-muted/50 py-24">
        <div className="@container mx-auto w-full max-w-5xl px-6">
          <div className="mb-12">
            <h2 className="text-foreground text-4xl font-semibold">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground my-4 text-balance text-lg">
              Our leadership team brings deep expertise and passion to every
              project. Together, we build the future of trusted SaaS.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {members.map((member, idx) => (
              <div
                key={idx}
                className="bg-card rounded-2xl shadow p-8 flex flex-col items-center"
              >
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={member.src} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-center mb-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

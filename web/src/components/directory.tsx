import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Directory() {
    const teamMembers = [
        { name: "Florencio Dorrance", role: "Market Development Manager" },
        { name: "Benny Sparbauer", role: "Area Sales Manager" },
        { name: "Jamel Eusebio", role: "Administrator" },
        { name: "Lavern Laboy", role: "Account Executive" },
        { name: "Alfonzo Schuessler", role: "Proposal Writer" },
        { name: "Daryl Nebis", role: "Nursing Assistant" },
    ];

    return (
        <div className='flex flex-col p-4 space-y-4'>
            <h2 className='text-xl font-bold'>Directory</h2>
            <div className='space-y-3'>
                {teamMembers.map((member, index) => (
                    <div key={index} className='flex items-center space-x-3'>
                        <Avatar>
                            <AvatarImage src={`https://i.pravatar.cc/150?u=${member.name}`} alt={member.name} />
                            <AvatarFallback>
                                {member.name
                                    .split(" ")
                                    .map(n => n[0])
                                    .join("")}
                            </AvatarFallback>
                        </Avatar>
                        <div className='flex-1'>
                            <div className='font-semibold text-sm'>{member.name}</div>
                            <div className='text-xs text-gray-500'>{member.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

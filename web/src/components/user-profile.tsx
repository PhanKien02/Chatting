import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAuthContext } from '@/contexts/auth.context';
import { Edit2, Mail, Phone, Settings } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

// Define the props for the component (optional, but good practice)
interface UserProfileProps { }

export default function UserProfile({ }: UserProfileProps) {
        // useUser is a typed hook, so 'user' is automatically inferred as UserProfile
        const { user } = useAuthContext();
        if (!user) return <></>
        return (
                <>
                        <Card className="w-full h-full overflow-hidden rounded-xl shadow-lg">

                                {/* 1. Header Background & Avatar */}
                                <div className="relative">
                                        {/* Header Background (Gradient) */}
                                        <div className="h-32 bg-gradient-to-r from-blue-600/90 to-purple-600/90" />

                                        {/* Centered Avatar */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                <Avatar className="h-24 w-24 border-4 border-white shadow-md mt-40">
                                                        <AvatarImage className='rounded-full mt-20 ' src={user.avatarUrl ? user.avatarUrl : "https://i.pravatar.cc/150?u=a042581f4e29026704d"} alt={user.fullName} />
                                                        <AvatarFallback className="text-xl font-bold bg-gray-200">
                                                                {user.fullName ? user.fullName.split(' ').map(n => n[0]).join('') : ""}
                                                        </AvatarFallback>
                                                </Avatar>
                                        </div>
                                </div>

                                <CardContent className="p-6 pt-16 text-center">

                                        {/* 2. Name and ID */}
                                        <h2 className="text-2xl font-bold mt-2">
                                                {user.fullName}
                                        </h2>
                                        <p className="text-sm text-gray-500 mb-6">
                                                ID: {user.id}
                                        </p>

                                        {/* 3. Contact Info (Email) */}
                                        <InfoField icon={Mail} label="Email" value={user.email || ""} />

                                        {/* 4. Contact Info (Phone) */}
                                        <InfoField icon={Phone} label="Phone" value={user.phone || ""} color="text-green-500" />

                                        {/* Placeholder for {var} in the middle (if needed for a role/status) */}
                                        {/* <p className="text-sm text-gray-700 my-4">User Role: Administrator</p> */}

                                        {/* 5. Buttons */}
                                        <div className="flex space-x-2 mt-8">
                                                <Button
                                                        className="flex-1 h-11 bg-blue-600 hover:bg-blue-700"
                                                >
                                                        <Edit2 className="mr-2 h-4 w-4" /> Edit Profile
                                                </Button>
                                                <Button
                                                        variant="default"
                                                        className="flex-1 h-11 border-gray-300 text-gray-700 hover:bg-gray-100"
                                                >
                                                        <Settings className="mr-2 h-4 w-4" /> Settings
                                                </Button>
                                        </div>
                                </CardContent>
                        </Card>
                </>
        );
}
interface InfoFieldProps {
        icon: React.ElementType;
        label: string;
        value: string;
        color?: string;
}
const InfoField: React.FC<InfoFieldProps> = ({ icon: Icon, label, value, color }) => (
        <div className="flex items-center p-3 mb-3 border rounded-lg bg-gray-50/50 text-left">
                <Icon className={`h-5 w-5 mr-3 ${color || 'text-blue-500'}`} />
                <div>
                        <p className="text-xs text-gray-500">{label}</p>
                        <p className="font-medium text-sm text-gray-800">{value}</p>
                </div>
        </div>
);
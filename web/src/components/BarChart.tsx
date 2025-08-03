"use client";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#254133",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig;

export default function Component() {
    return (
        <ChartContainer config={chartConfig} className='h-full w-full bg-white overflow-auto'>
            <LineChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey='month' tickLine={false} tickMargin={10} axisLine={false} tickFormatter={value => value.slice(0, 3)} />
                <ChartLegend content={<ChartLegendContent />} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type='monotone' dataKey='desktop' stroke='#8884d8' activeDot={{ r: 8 }}></Line>
                <Line type='monotone' dataKey='mobile' stroke='#82ca9d'></Line>
            </LineChart>
        </ChartContainer>
    );
}

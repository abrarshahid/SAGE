'use client'

import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 200 },
  { month: "Mar", users: 350 },
  { month: "Apr", users: 600 },
  { month: "May", users: 1000 },
  { month: "Jun", users: 1800 },
]

export default function SageChart() {
  return (
    <Card className="w-full max-w-4xl bg-white">
      <CardHeader>
        <CardTitle className="text-teal-900">SAGE User Growth</CardTitle>
        <CardDescription className="text-teal-700">Monthly active users</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            users: {
              label: "Users",
              color: "hsl(180, 70%, 30%)",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" stroke="hsl(180, 70%, 30%)" />
              <YAxis stroke="hsl(180, 70%, 30%)" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="users" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}


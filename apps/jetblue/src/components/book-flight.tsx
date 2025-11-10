import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function FlightSearchCompact() {
  return (
    <div className="max-w-3xl rounded-lg bg-gray-100 p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-4">
          <Select defaultValue="roundtrip">
            <SelectTrigger className="h-auto border-none p-0 font-bold text-jb-navy shadow-none">
              <SelectValue placeholder="Trip type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="roundtrip">Roundtrip</SelectItem>
              <SelectItem value="oneway">One-way</SelectItem>
              <SelectItem value="multicity">Multi-city</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="1-adult">
            <SelectTrigger className="h-auto border-none p-0 font-bold text-jb-navy shadow-none">
              <SelectValue placeholder="Passengers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-adult">1 Adult</SelectItem>
              <SelectItem value="2-adults">2 Adults</SelectItem>
              <SelectItem value="1-adult-1-child">1 Adult, 1 Child</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="use-points" />
          <Label
            htmlFor="use-points"
            className="font-medium text-gray-700 text-sm"
          >
            Use TrueBlue points
          </Label>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <div className="w-full md:w-auto">
          <Label className="mb-1 text-sm">From</Label>
          <Input type="text" placeholder="City or airport" defaultValue="BOS" />
        </div>

        <div className="w-full md:w-auto">
          <Label className="mb-1 text-sm">To</Label>
          <Input type="text" placeholder="City or airport" defaultValue="" />
        </div>

        <div className="w-full md:w-auto">
          <Label className="mb-1 text-sm">Depart</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal text-jb-navy",
                  !Date ? "text-muted-foreground" : "",
                )}
              >
                Thu Mar 13
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="w-full md:w-auto">
          <Label className="mb-1 text-sm">Return</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal text-jb-navy",
                  !Date ? "text-muted-foreground" : "",
                )}
              >
                Sat Mar 15
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="w-full md:w-auto">
          <Button className="bg-jb-navy py-8 text-white hover:bg-jb-navy">
            Search flights
          </Button>
        </div>
      </div>
    </div>
  );
}

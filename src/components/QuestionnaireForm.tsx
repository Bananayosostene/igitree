import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  User2Icon,
  Users2Icon,
  SchoolIcon,
  FileTextIcon,
  FileIcon,
  ShieldIcon,
  HomeIcon,
  UserIcon,
  ClipboardIcon,
  DnaIcon,
} from "lucide-react";

const QuestionnaireForm = () => {
  const [progress, setProgress] = React.useState(10);
  const [activeTab, setActiveTab] = React.useState("personal-info");

  // Define tabValues outside of the function
  const tabValues = [
    "personal-info",
    "family-background",
    "sibling-extended-family",
    "pre-genocide",
    "separation-details",
    "post-genocide",
    "physical-clues",
    "cultural-knowledge",
    "supporting-evidence",
    "dna-preferences",
  ];

  const handleTabChange = (value: any) => {
    setActiveTab(value);
    const currentIndex = tabValues.indexOf(value);
    setProgress(((currentIndex + 1) / tabValues.length) * 100);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-white p-4 flex flex-col items-end border-b">
        <div className="text-black mb-1 text-sm">
          Step {tabValues.indexOf(activeTab) + 1} of {tabValues.length}
        </div>
        <Progress value={progress} className="w-full h-2 bg-lightBlue" />
      </div>

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <div className="overflow-x-auto px-2 py-2 border-b">
          <TabsList className="grid grid-flow-col auto-cols-max gap-2">
            <TabsTrigger
              value="personal-info"
              className="flex items-center gap-2"
            >
              <User2Icon className="h-4 w-4" />
              <span>Personal Info</span>
            </TabsTrigger>
            <TabsTrigger
              value="family-background"
              className="flex items-center gap-2"
            >
              <Users2Icon className="h-4 w-4" />
              <span>Family Background</span>
            </TabsTrigger>
            <TabsTrigger
              value="sibling-extended-family"
              className="flex items-center gap-2"
            >
              <UserIcon className="h-4 w-4" />
              <span>Sibling & Extended Family</span>
            </TabsTrigger>
            <TabsTrigger
              value="pre-genocide"
              className="flex items-center gap-2"
            >
              <SchoolIcon className="h-4 w-4" />
              <span>Pre-Genocide</span>
            </TabsTrigger>
            <TabsTrigger
              value="separation-details"
              className="flex items-center gap-2"
            >
              <FileTextIcon className="h-4 w-4" />
              <span>Separation Details</span>
            </TabsTrigger>
            <TabsTrigger
              value="post-genocide"
              className="flex items-center gap-2"
            >
              <FileIcon className="h-4 w-4" />
              <span>Post-Genocide</span>
            </TabsTrigger>
            <TabsTrigger
              value="physical-clues"
              className="flex items-center gap-2"
            >
              <DnaIcon className="h-4 w-4" />
              <span>Physical Clues</span>
            </TabsTrigger>
            <TabsTrigger
              value="cultural-knowledge"
              className="flex items-center gap-2"
            >
              <HomeIcon className="h-4 w-4" />
              <span>Cultural Knowledge</span>
            </TabsTrigger>
            <TabsTrigger
              value="supporting-evidence"
              className="flex items-center gap-2"
            >
              <ClipboardIcon className="h-4 w-4" />
              <span>Supporting Evidence</span>
            </TabsTrigger>
            <TabsTrigger
              value="dna-preferences"
              className="flex items-center gap-2"
            >
              <DnaIcon className="h-4 w-4" />
              <span>DNA Preferences</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="personal-info" className="p-4">
          <Card className="mb-6 bg-blue-50 border-none">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <User2Icon className="h-10 w-10 text-primary shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-1">
                    Personal Information
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Let's start with some basic information about you. This will
                    help us identify potential family connections.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 bg-blue-50 border-none border-l-4 border-l-secondary">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <ShieldIcon className="h-5 w-5 text-secondary shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-gray-600 text-sm font-bold mb-1">
                    Your information is safe with us.
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    All data is encrypted and only used for family matching
                    purposes. We understand the sensitivity of this information.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                What is your full name?
              </h3>
              <p className="text-gray-600 mb-4">
                Please enter your complete name as you remember it from
                childhood.
              </p>
              <Input placeholder="Enter full name" className="w-full" />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Do you have any other names or nicknames you were called as a
                child?
              </h3>
              <Input placeholder="Enter nicknames" className="w-full" />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                What is your date of birth or estimated year of birth?
              </h3>
              <p className="text-gray-600 mb-4">
                If you don't know the exact date, an estimate is helpful.
              </p>
              <Input
                type="date"
                placeholder="mm/dd/yyyy"
                className="w-full mb-4"
              />
              <div className="flex flex-wrap gap-4">
                <RadioGroup
                  defaultValue="exact"
                  className="flex flex-row gap-4"
                >
                  <div className="flex items-center space-x-2 bg-btn rounded-md py-2 px-4">
                    <RadioGroupItem value="exact" id="exact" />
                    <Label htmlFor="exact">I know my exact date</Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-btn rounded-md py-2 px-4">
                    <RadioGroupItem value="estimate" id="estimate" />
                    <Label htmlFor="estimate">This is an estimate</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">Where were you born?</h3>
              <p className="text-gray-600 mb-4">
                Please be as specific as possible - village, district, and
                country.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input placeholder="City/Village" />
                <Input placeholder="District" />
              </div>
              <Input placeholder="Country" />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Have you ever lived in another country or refugee camp?
              </h3>
              <RadioGroup className="flex gap-4 mb-4">
                <div className="flex items-center space-x-2 bg-btn rounded-md py-2 px-4">
                  <RadioGroupItem value="yes" id="yes-refugee" />
                  <Label htmlFor="yes-refugee">Yes</Label>
                </div>
                <div className="flex items-center space-x-2 bg-btn rounded-md py-2 px-4">
                  <RadioGroupItem value="no" id="no-refugee" />
                  <Label htmlFor="no-refugee">No</Label>
                </div>
              </RadioGroup>
              <div>
                <Label htmlFor="refugee-details">If yes, where and when?</Label>
                <Textarea
                  id="refugee-details"
                  placeholder="Please provide details of locations and dates if known"
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between mt-8 border-t pt-4">
            <div></div>
            <Button
              onClick={() => handleTabChange("family-background")}
              className="bg-primary hover:bg-primary/90"
            >
              Continue to Family Background
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="family-background" className="p-4">
          <Card className="mb-6 bg-blue-50 border-none">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Users2Icon className="h-10 w-10 text-primary shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-1">
                    Family Background
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Information about your parents and grandparents can help
                    establish family connections.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                What are the names of your known parents (father & mother)?
              </h3>
              <Input placeholder="Father's name" className="w-full mb-4" />
              <Input placeholder="Mother's name" className="w-full" />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Do you know if your parents had any other names or nicknames?
              </h3>
              <Input placeholder="Parents' nicknames" className="w-full" />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Where were your parents born?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input placeholder="Father's birthplace" />
                <Input placeholder="Mother's birthplace" />
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Do you know the names of your grandparents? (Maternal &
                Paternal)
              </h3>
              <Input
                placeholder="Maternal grandparents' names"
                className="w-full mb-4"
              />
              <Input
                placeholder="Paternal grandparents' names"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Did your parents have siblings? If yes, what were their names?
              </h3>
              <Textarea
                placeholder="Parents' siblings names"
                className="w-full"
              />
            </CardContent>
          </Card>

          <div className="flex justify-between mt-8 border-t pt-4">
            <Button
              variant="outline"
              onClick={() => handleTabChange("personal-info")}
            >
              <ChevronLeftIcon className="mr-2 h-4 w-4" />
              Back to Personal Info
            </Button>
            <Button
              onClick={() => handleTabChange("sibling-extended-family")}
              className="bg-primary hover:bg-primary/90"
            >
              Continue to Sibling & Extended Family
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="sibling-extended-family" className="p-4">
          <Card className="mb-6 bg-blue-50 border-none">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <UserIcon className="h-10 w-10 text-primary shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-1">
                    Sibling & Extended Family Information
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Information about your siblings and extended family can help
                    establish family connections.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Do you have any known brothers or sisters?
              </h3>
              <Textarea
                placeholder="Siblings' names and details"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                What was their approximate age in 1994?
              </h3>
              <Textarea
                placeholder="Siblings' ages in 1994"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Did your family belong to any extended family clan or group?
              </h3>
              <Input
                placeholder="Extended family clan or group"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Do you remember any cousins, aunts, or uncles?
              </h3>
              <Textarea
                placeholder="Cousins, aunts, or uncles details"
                className="w-full"
              />
            </CardContent>
          </Card>

          <div className="flex justify-between mt-8 border-t pt-4">
            <Button
              variant="outline"
              onClick={() => handleTabChange("family-background")}
            >
              <ChevronLeftIcon className="mr-2 h-4 w-4" />
              Back to Family Background
            </Button>
            <Button
              onClick={() => handleTabChange("pre-genocide")}
              className="bg-primary hover:bg-primary/90"
            >
              Continue to Pre-Genocide
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="pre-genocide" className="p-4">
          <Card className="mb-6 bg-blue-50 border-none">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <SchoolIcon className="h-10 w-10 text-primary shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-1">
                    Pre-Genocide Memories
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Information about your life before the Genocide can help
                    establish family connections.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Where was your family living before the Genocide?
              </h3>
              <Input
                placeholder="Family's residence before Genocide"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                What did your parents do for work?
              </h3>
              <Input placeholder="Parents' occupations" className="w-full" />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Did your family own any land, property, or livestock?
              </h3>
              <Textarea
                placeholder="Details of land, property, or livestock"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Did you go to school before 1994? If yes, where?
              </h3>
              <Input
                placeholder="School name and location"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Do you recall the name of a childhood friend or neighbor?
              </h3>
              <Input
                placeholder="Friend or neighbor's name"
                className="w-full"
              />
            </CardContent>
          </Card>

          <div className="flex justify-between mt-8 border-t pt-4">
            <Button
              variant="outline"
              onClick={() => handleTabChange("sibling-extended-family")}
            >
              <ChevronLeftIcon className="mr-2 h-4 w-4" />
              Back to Sibling & Extended Family
            </Button>
            <Button
              onClick={() => handleTabChange("separation-details")}
              className="bg-primary hover:bg-primary/90"
            >
              Continue to Separation Details
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="separation-details" className="p-4">
          <Card className="mb-6 bg-blue-50 border-none">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <FileTextIcon className="h-10 w-10 text-primary shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-1">
                    Separation Details
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Information about your separation from your family can help
                    establish connections.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                How did you get separated from your family?
              </h3>
              <Textarea
                placeholder="Details of separation"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Where were you during the Genocide (district, village, or camp)?
              </h3>
              <Input
                placeholder="Location during Genocide"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Were you with any known family members when you got separated?
              </h3>
              <Textarea
                placeholder="Family members present during separation"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Were you taken to an orphanage or refugee camp? If yes, which
                one?
              </h3>
              <Input
                placeholder="Orphanage or refugee camp name"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Do you remember who helped or took care of you after the war?
              </h3>
              <Textarea
                placeholder="Details of caretakers after the war"
                className="w-full"
              />
            </CardContent>
          </Card>

          <div className="flex justify-between mt-8 border-t pt-4">
            <Button
              variant="outline"
              onClick={() => handleTabChange("pre-genocide")}
            >
              <ChevronLeftIcon className="mr-2 h-4 w-4" />
              Back to Pre-Genocide
            </Button>
            <Button
              onClick={() => handleTabChange("post-genocide")}
              className="bg-primary hover:bg-primary/90"
            >
              Continue to Post-Genocide
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="post-genocide" className="p-4">
          <Card className="mb-6 bg-blue-50 border-none">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <FileIcon className="h-10 w-10 text-primary shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-1">
                    Post-Genocide Life & Identity
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Information about your life after the Genocide can help
                    establish family connections.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Did you grow up in an orphanage, foster home, or with a
                guardian?
              </h3>
              <Textarea
                placeholder="Details of upbringing after Genocide"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Have you taken any steps before to trace your family?
              </h3>
              <Textarea
                placeholder="Previous efforts to trace family"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Have you undergone any DNA testing before?
              </h3>
              <RadioGroup className="flex gap-4 mb-4">
                <div className="flex items-center space-x-2 bg-btn rounded-md py-2 px-4">
                  <RadioGroupItem value="yes" id="yes-dna" />
                  <Label htmlFor="yes-dna">Yes</Label>
                </div>
                <div className="flex items-center space-x-2 bg-btn rounded-md py-2 px-4">
                  <RadioGroupItem value="no" id="no-dna" />
                  <Label htmlFor="no-dna">No</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Do you have any official documents (birth certificates, old
                pictures, school records)?
              </h3>
              <Textarea
                placeholder="Details of official documents"
                className="w-full"
              />
            </CardContent>
          </Card>

          <div className="flex justify-between mt-8 border-t pt-4">
            <Button
              variant="outline"
              onClick={() => handleTabChange("separation-details")}
            >
              <ChevronLeftIcon className="mr-2 h-4 w-4" />
              Back to Separation Details
            </Button>
            <Button
              onClick={() => handleTabChange("physical-clues")}
              className="bg-primary hover:bg-primary/90"
            >
              Continue to Physical Clues
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="physical-clues" className="p-4">
          <Card className="mb-6 bg-blue-50 border-none">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <DnaIcon className="h-10 w-10 text-primary shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-1">
                    Physical & Biological Clues
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Information about your physical traits can help establish
                    family connections.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Do you have any birthmarks, scars, or unique physical traits
                that your family might recognize?
              </h3>
              <Textarea
                placeholder="Details of birthmarks, scars, or unique physical traits"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Were you told any unique genetic traits run in your family
                (e.g., eye color, height, skin tone)?
              </h3>
              <Textarea
                placeholder="Details of genetic traits"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Does your family have any known hereditary health conditions?
              </h3>
              <Textarea
                placeholder="Details of hereditary health conditions"
                className="w-full"
              />
            </CardContent>
          </Card>

          <div className="flex justify-between mt-8 border-t pt-4">
            <Button
              variant="outline"
              onClick={() => handleTabChange("post-genocide")}
            >
              <ChevronLeftIcon className="mr-2 h-4 w-4" />
              Back to Post-Genocide
            </Button>
            <Button
              onClick={() => handleTabChange("cultural-knowledge")}
              className="bg-primary hover:bg-primary/90"
            >
              Continue to Cultural Knowledge
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="cultural-knowledge" className="p-4">
          <Card className="mb-6 bg-blue-50 border-none">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <HomeIcon className="h-10 w-10 text-primary shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-1">
                    Cultural & Ancestral Knowledge
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Information about your cultural background can help
                    establish family connections.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Do you know which Rwandan clan or lineage your family belonged
                to?
              </h3>
              <Input placeholder="Rwandan clan or lineage" className="w-full" />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Do you remember any cultural traditions or family stories passed
                down?
              </h3>
              <Textarea
                placeholder="Cultural traditions or family stories"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Did your family practice any specific religious or traditional
                customs?
              </h3>
              <Textarea
                placeholder="Religious or traditional customs"
                className="w-full"
              />
            </CardContent>
          </Card>

          <div className="flex justify-between mt-8 border-t pt-4">
            <Button
              variant="outline"
              onClick={() => handleTabChange("physical-clues")}
            >
              <ChevronLeftIcon className="mr-2 h-4 w-4" />
              Back to Physical Clues
            </Button>
            <Button
              onClick={() => handleTabChange("supporting-evidence")}
              className="bg-primary hover:bg-primary/90"
            >
              Continue to Supporting Evidence
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="supporting-evidence" className="p-4">
          <Card className="mb-6 bg-blue-50 border-none">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <ClipboardIcon className="h-10 w-10 text-primary shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-1">
                    Supporting Evidence & Leads
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Any supporting evidence can help establish family
                    connections.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Do you have any old photos, letters, or family artifacts?
              </h3>
              <Textarea
                placeholder="Details of old photos, letters, or family artifacts"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Do you have contacts of any people who may remember your family?
              </h3>
              <Textarea
                placeholder="Contacts of people who may remember your family"
                className="w-full"
              />
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Have you connected with any family tracing organizations before?
              </h3>
              <Textarea
                placeholder="Details of previous connections with family tracing organizations"
                className="w-full"
              />
            </CardContent>
          </Card>

          <div className="flex justify-between mt-8 border-t pt-4">
            <Button
              variant="outline"
              onClick={() => handleTabChange("cultural-knowledge")}
            >
              <ChevronLeftIcon className="mr-2 h-4 w-4" />
              Back to Cultural Knowledge
            </Button>
            <Button
              onClick={() => handleTabChange("dna-preferences")}
              className="bg-primary hover:bg-primary/90"
            >
              Continue to DNA Preferences
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="dna-preferences" className="p-4">
          <Card className="mb-6 bg-blue-50 border-none">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <DnaIcon className="h-10 w-10 text-primary shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl mb-1">
                    DNA & Technology Matching Preferences
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Your preferences regarding DNA and technology matching can
                    help establish family connections.
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Are you open to taking a DNA test for familial matching?
              </h3>
              <RadioGroup className="flex gap-4 mb-4">
                <div className="flex items-center space-x-2 bg-btn rounded-md py-2 px-4">
                  <RadioGroupItem value="yes" id="yes-dna-test" />
                  <Label htmlFor="yes-dna-test">Yes</Label>
                </div>
                <div className="flex items-center space-x-2 bg-btn rounded-md py-2 px-4">
                  <RadioGroupItem value="no" id="no-dna-test" />
                  <Label htmlFor="no-dna-test">No</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Would you be comfortable with AI using your data to find
                potential family connections?
              </h3>
              <RadioGroup className="flex gap-4 mb-4">
                <div className="flex items-center space-x-2 bg-btn rounded-md py-2 px-4">
                  <RadioGroupItem value="yes" id="yes-ai" />
                  <Label htmlFor="yes-ai">Yes</Label>
                </div>
                <div className="flex items-center space-x-2 bg-btn rounded-md py-2 px-4">
                  <RadioGroupItem value="no" id="no-ai" />
                  <Label htmlFor="no-ai">No</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Do you consent to your anonymized data being used to improve AI
                matching?
              </h3>
              <RadioGroup className="flex gap-4 mb-4">
                <div className="flex items-center space-x-2 bg-btn rounded-md py-2 px-4">
                  <RadioGroupItem value="yes" id="yes-consent" />
                  <Label htmlFor="yes-consent">Yes</Label>
                </div>
                <div className="flex items-center space-x-2 bg-btn rounded-md py-2 px-4">
                  <RadioGroupItem value="no" id="no-consent" />
                  <Label htmlFor="no-consent">No</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <div className="flex justify-between mt-8 border-t pt-4">
            <Button
              variant="outline"
              onClick={() => handleTabChange("supporting-evidence")}
            >
              <ChevronLeftIcon className="mr-2 h-4 w-4" />
              Back to Supporting Evidence
            </Button>
            <Button
              onClick={() => handleTabChange("personal-info")}
              className="bg-primary hover:bg-primary/90"
            >
              Submit
              <ChevronRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default QuestionnaireForm;

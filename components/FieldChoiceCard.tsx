'use client'
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSet,
    FieldTitle,
    FieldSeparator
  } from "@/components/ui/field"
  import {
    RadioGroup,
    RadioGroupItem,
  } from "@/components/ui/radio-group"
  import { TypingAnimation } from "./ui/typing-animation"
import { Card, CardContent, CardHeader } from "./ui/card"
import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import { useRouter, usePathname } from "next/navigation";

  export function FieldChoiceCard() {

    const router = useRouter();

    interface quizDetail  {
        id: number,
        name: string,
        src: string
    }

    const languageList: quizDetail[] = [
        {
            "id": 1,
            "name": "Python",
            "src": "/python.svg"
        },
        {
            "id": 2,
            "name": "JavaScript",
            "src": "/javascript.svg"
        },
        {
            "id": 3,
            "name": "TypeScript",
            "src": "/typescript.svg"
        }
    ]

    const CompaniesList: quizDetail[] = [
        {
            "id": 1,
            "name": "Amazon",
            "src": "/amazon.svg",
        },
        {
            "id": 2,
            "name": "Zoho",
            "src": "/zoho.svg"
        },
        {
            "id": 3,
            "name": "TCS",
            "src": "/TCS.jfif"
        }
    ];

      // 2. Refined handler function to prevent default link action
  const handleQuizItem = (title: string, e: React.MouseEvent<HTMLDivElement>) => {
    // Crucial step: Prevent the default browser navigation (full page reload)
    e.preventDefault(); 
    
    // 3. Perform client-side navigation
    router.push(`/dashboard/quiz/${encodeURIComponent(title)}`);
    
    console.log(`Navigating to: /dashboard/${title}`);
  }

    return (
      <div className="flex flex-warp flex-col justify-between items-center p-8 mx-[10%]">
        <FieldGroup>
          <FieldTitle>Companies</FieldTitle>
          <FieldSet className="grid grid-cols-1 md:grid-cols-4">
            {CompaniesList.map((company) => 
                <Dialog key={company.id}>
                    <DialogTrigger >
                        <Card onClick={(e) => handleQuizItem(company.name, e)} >
                            <CardContent>
                                <Image  src={company.src} alt="missing" width={100} height={100} className="w-full rounded-xl" />
                                <h5 className="text-center mt-5 font-semibold">{company.name}</h5>
                            </CardContent>
                        </Card>
                        </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                        </DialogHeader>
                            <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                Name
                                </Label>
                                <Input id="name" value="Pedro Duarte" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                Username
                                </Label>
                                <Input id="username" value="@peduarte" className="col-span-3" />
                            </div>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button type="button" variant="secondary">
                                    Close
                                    </Button>
                                </DialogClose>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                            
                        </DialogContent>
                    </Dialog>
            )}
          </FieldSet>
          <FieldSeparator />
          <FieldTitle>Languages</FieldTitle>
          <FieldSet className="grid grid-cols-1 md:grid-cols-4">
            {languageList.map((language) => 
                <Card key={language.id}  onClick={(e) => handleQuizItem(language.name, e)} >
                    <CardContent>
                        <Image src={language.src} alt="missing" width={100} height={100} className="w-full rounded-xl" />
                        <h5 className="text-center mt-5 font-semibold">{language.name}</h5>
                    </CardContent>
                </Card>
            )}
          </FieldSet>
          <FieldSet>
            
          </FieldSet>
        </FieldGroup>
      </div>
    )
  }
  
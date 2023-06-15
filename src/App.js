import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { TextInput } from "./components/textInput";
import { TextInputBox } from "./components/textInputBox";
import formattedResume from "./files/resume";
import formattedReadMe from "./files/readme";
import formattedPortfolio from "./files/portfolio";
import emailjs from 'emailjs-com';

function App() {
  const [mockDirectory, setMockDirectory] = useState({
    home: {
      visitor: {
        "readme.txt": formattedReadMe,
        "resume.txt": formattedResume,
        "awards.txt": "Teaching Assistant of the Year 2022, Corn Hacks 3rd Place 2022, Really Cool Guy 2023",
        "aboutme.txt": "I like to program, play video games, and hang out with my friends. I also have a golden retriever named Archie.",
        portfolio: {
          "bohnBot.txt": formattedPortfolio.bohnBot,
          "theBohnZone.txt": formattedPortfolio.bohnZone,
          "discordBotMaker.txt": formattedPortfolio.discordBotMaker,
          "PersonalSite.txt": "This website! A recreation of my terminal. Surprisingly challenging to make.",
        },
      },
      user1: {
        documents: {
          "important_document.docx": {},
          "top_secret_plans.pdf": {},
          "cat_memes.txt": "Meow, meow, meow! Enjoy these hilarious cat memes!",
          "dog_pictures.txt": "Woof! Here are some adorable dog pictures to brighten your day.",
          "valorant_tips.txt": "Valorant tip: Remember to use utility wisely and communicate with your team for better coordination.",
        },
        music: {
          "favorite_song.mp3": {},
          "karaoke_disaster.wav": {},
          "dancing_in_the_shower.midi": {},
          "coding_soundtrack.txt": "This playlist of epic soundtracks will help you stay focused while coding.",
        },
      },
      user2: {
        videos: {
          "funny_cat_video.mp4": {},
          "epic_fail_compilation.mkv": {},
          "dance_moves_gone_wrong.mov": {},
          "laughter_challenge.txt": "Watch these videos and try not to laugh! It's harder than you think.",
          "valorant_highlights.txt": "Check out these amazing Valorant highlights featuring incredible plays and clutch moments.",
        },
      },
    },
    public: {
      shared: {
        "public_announcement.txt": "Attention, everyone! The cake is a lie!",
        "confidentiality_breach.jpg": {},
        "banana_for_scale.png": {},
        "funny_quotes.txt": "Here are some funny quotes to brighten your day:\n1. \"I'm not lazy, I'm just on energy-saving mode.\"\n2. \"I told my computer I needed a break, and now it won't stop showing me travel ads.\"",
        "programming_easter_eggs.txt": "Did you know? The first computer programmer was Ada Lovelace, and she wrote code for Charles Babbage's Analytical Engine in the 1840s.",
      },
    },
  });
  
  const [previousCommands, setPreviousCommands] = useState(["executing help Available commands: clear, pwd, echo, date, fortune, roll, help,","executing help ls, cd, cat, whoami, contact, mkdir, rmdir, touch, write, history, magic8ball, cow, hack",]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [currentPath, setCurrentPath] = useState(["home", "visitor"]);

  const inputRef = useRef();

  useEffect(() => {
    // inputRef.current.focus();
  }, []);

  const handleCommand = (commands) => {
    let newMockDirectory;
    switch (commands[0]) {
      case "clear":
        setPreviousCommands([]);
        break;
      case "pwd":
        setPreviousCommands((previousCommands) => {
          return [
            ...previousCommands,
            "executing pwd /" + currentPath.join("/"),
          ];
        });
        break;
      case "echo":
        const text = commands.slice(1).join(" ");
        setPreviousCommands((previousCommands) => {
          return [...previousCommands, "executing echo " + text];
        });
        break;
      case "date":
        const currentDate = new Date().toLocaleString();
        setPreviousCommands((previousCommands) => {
          return [
            ...previousCommands,
            "executing date Current date and time: " + currentDate,
          ];
        });
        break;
      case "fortune":
        const fortunes = [
          "You will have a great day!",
          "Opportunities will come knocking on your door.",
          "A surprise awaits you in the near future.",
          "Your hard work will pay off.",
        ];
        const randomFortune =
          fortunes[Math.floor(Math.random() * fortunes.length)];
        setPreviousCommands((previousCommands) => {
          return [
            ...previousCommands,
            "executing fortune Fortune: " + randomFortune,
          ];
        });
        break;
      case "roll":
        const max = parseInt(commands[1]);
        if (isNaN(max) || max <= 0) {
          setPreviousCommands((previousCommands) => {
            return [
              ...previousCommands,
              "executing roll Invalid argument. Please specify a positive number.",
            ];
          });
        } else {
          const randomNum = Math.floor(Math.random() * max) + 1;
          setPreviousCommands((previousCommands) => {
            return [
              ...previousCommands,
              "executing roll You rolled a " + randomNum + " (1-" + max + ")",
            ];
          });
        }
        break;
      case "help":
        setPreviousCommands((previousCommands) => {
          return [
            ...previousCommands,
            "executing help Available commands: clear, pwd, echo, date, fortune, roll, help,","executing help ls, cd, cat, whoami, contact, mkdir, rmdir, touch, write, history, magic8ball, cow, hack",
          ];
        });
        break;
      case "ls":
        handleLS();
        break;
      case "cd":
        handleCD(commands, commands[1]);
        break;
      case "cat":
        handleCat(commands[1]);
        break;
      case "whoami":
        setPreviousCommands((previousCommands) => {
          return [
            ...previousCommands,
            "executing whoami Truly, only you know who you are.",
          ];
        });
        break;
        case "contact":
          if (commands.length < 3) {
            setPreviousCommands((previousCommands) => {
              return [
                ...previousCommands,
                "executing contact Error: contact <your_email> <your_message>", "executing contact Example: contact bob@gmail.com hello Dillon, i want to hire you!",
              ];
            });
          } else {
            const email = commands[1];
            const message = commands.slice(2).join(" ");
    
            emailjs.send(
              'service_h7s1h2d', // Your EmailJS service ID
              'template_ahgpnrs', // Your EmailJS template ID
              {
                from_email: email,
                to_email: 'dillonleehowell@gmail.com', // Replace this with your personal email
                message: message,
              },
              'dSTWvsUdjwLVOjdWa' // Your EmailJS user ID
            )
            .then((response) => {
              setPreviousCommands((previousCommands) => {
                return [
                  ...previousCommands,
                  "executing contact Message sent successfully!",
                ];
              });
            }, (error) => {
              setPreviousCommands((previousCommands) => {
                return [
                  ...previousCommands,
                  "executing contact An error occurred while sending the message.",
                ];
              });
            });
          }
          break;
      case "mkdir":
        const newDir = commands[1];
        if (newDir) {
          const currentDir = getCurrentDirectory();
          console.log("here", currentDir);
          if (!currentDir[newDir]) {
            currentDir[newDir] = {}; // create new directory
            setPreviousCommands((previousCommands) => {
              return [
                ...previousCommands,
                "executing mkdir Directory '" + newDir + "' created",
              ];
            });
          } else {
            setPreviousCommands((previousCommands) => {
              return [
                ...previousCommands,
                "executing mkdir Directory '" + newDir + "' already exists",
              ];
            });
          }
        } else {
          setPreviousCommands((previousCommands) => {
            return [
              ...previousCommands,
              "executing mkdir Please specify a directory name",
            ];
          });
        }
        break;
      case "rmdir":
        const dirToRemove = commands[1];
        if (dirToRemove) {
          const currentDir = getCurrentDirectory();
          if (currentDir[dirToRemove]) {
            delete currentDir[dirToRemove]; // remove directory
            setPreviousCommands((previousCommands) => {
              return [
                ...previousCommands,
                "executing rmdir Directory '" + dirToRemove + "' removed",
              ];
            });
          } else {
            setPreviousCommands((previousCommands) => {
              return [
                ...previousCommands,
                "executing rmdir Directory '" + dirToRemove + "' not found",
              ];
            });
          }
        } else {
          setPreviousCommands((previousCommands) => {
            return [
              ...previousCommands,
              "executing rmdir Please specify a directory name",
            ];
          });
        }
        break;
      case "touch":
        const newFile = commands[1].toString();
        if (newFile && newFile.endsWith(".txt")) {
          const currentDir = getCurrentDirectory();
          if (!currentDir[newFile]) {
            newMockDirectory = JSON.parse(JSON.stringify(mockDirectory)); // Deep copy
            let targetDirectory = newMockDirectory;
            for (let dir of currentPath) {
              targetDirectory = targetDirectory[dir];
            }
            targetDirectory[newFile] = " "; // create new .txt file
            setMockDirectory(newMockDirectory);

            setPreviousCommands((previousCommands) => {
              return [
                ...previousCommands,
                "executing touch File '" + newFile + "' created",
              ];
            });
          } else {
            setPreviousCommands((previousCommands) => {
              return [
                ...previousCommands,
                "executing touch File '" + newFile + "' already exists",
              ];
            });
          }
        } else {
          setPreviousCommands((previousCommands) => {
            return [
              ...previousCommands,
              "executing touch Please specify a .txt file name",
            ];
          });
        }
        break;

      case "write":
        const fileToWrite = commands[1].toString();
        const textToWrite = commands.slice(2).join(" ");
        if (fileToWrite && fileToWrite.endsWith(".txt")) {
          const currentDir = getCurrentDirectory();
          if (currentDir[fileToWrite]) {
            newMockDirectory = { ...mockDirectory };
            currentDir[fileToWrite] = textToWrite; // write to .txt file
            setMockDirectory(newMockDirectory);
            setPreviousCommands((previousCommands) => {
              return [
                ...previousCommands,
                "executing write Written to file '" + fileToWrite + "'",
              ];
            });
          } else {
            setPreviousCommands((previousCommands) => {
              return [
                ...previousCommands,
                "executing write File '" + fileToWrite + "' not found",
              ];
            });
          }
        } else {
          setPreviousCommands((previousCommands) => {
            return [
              ...previousCommands,
              "executing write Please specify a .txt file name",
            ];
          });
        }
        break;
      case "history":
        const numCommands = parseInt(commands[1]);
        if (isNaN(numCommands) || numCommands <= 0) {
          setPreviousCommands((previousCommands) => {
            return [
              ...previousCommands,
              "executing history Invalid argument. Please specify a positive number.",
            ];
          });
        } else {
          const historyCommands = previousCommands.slice(-numCommands);

          for (let i = 0; i < historyCommands.length; i++) {
            const command = historyCommands[i].split(" ");
            if (command[0] === "executing") {
              historyCommands[i] = command.slice(1).join(" ");
            }
          }
          setPreviousCommands((previousCommands) => {
            return [
              ...previousCommands,
              "executing History: " + historyCommands.join(", "),
            ];
          });
        }
        break;
        case "magic8ball":
          const responses = [
              "It is certain.",
              "It is decidedly so.",
              "Without a doubt.",
              "Yes - definitely.",
              "You may rely on it.",
              "As I see it, yes.",
              "Most likely.",
              "Outlook good.",
              "Yes.",
              "Signs point to yes.",
              "Reply hazy, try again.",
              "Ask again later.",
              "Better not tell you now.",
              "Cannot predict now.",
              "Concentrate and ask again.",
              "Don't count on it.",
              "My reply is no.",
              "My sources say no.",
              "Outlook not so good.",
              "Very doubtful."
          ];
          const randomResponse = responses[Math.floor(Math.random() * responses.length)];
          setPreviousCommands((previousCommands) => {
              return [...previousCommands, "executing magic8ball Magic 8 Ball: " + randomResponse];
          });
          break;
          case "cow":
            const phrases = [
              "Moo!",
              "I'm a cow, not a horse!",
              "Got milk?",
            ];
            const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
            const cowAscii = `
               \\
                \\
                  ((___)
                  (-.-)
                   o_(")(")
            `;
            setPreviousCommands((previousCommands) => {
              return [...previousCommands, "executing cow Cow says: " + randomPhrase + cowAscii];
            });
            break;
            case "hack":
    if (commands.length < 2) {
        setPreviousCommands((previousCommands) => {
            return [...previousCommands, "executing hack Error: Please specify a name."];
        });
        break;
    }

    setPreviousCommands((previousCommands) => {
        return [...previousCommands, "executing hack Hack: Initiating hacking sequence..."];
    });

    setTimeout(() => {
        setPreviousCommands((previousCommands) => {
            return [...previousCommands, "executing hack Hack: Bypassing firewall..."];
        });
    }, 1000);

    setTimeout(() => {
        setPreviousCommands((previousCommands) => {
            return [...previousCommands, "executing hack Hack: Decrypting password..."];
        });
    }, 2000);

    setTimeout(() => {
        setPreviousCommands((previousCommands) => {
            return [...previousCommands, "executing hack Hack: Access granted."];
        });
    }, 3000);

    setTimeout(() => {
        setPreviousCommands((previousCommands) => {
            return [...previousCommands, `executing hack Hack: Successfully 'hacked' ${commands[1]}!`];
        });
    }, 4000);

    break;

          
      default:
        setPreviousCommands((previousCommands) => {
          return [
            ...previousCommands,
            "executing default " + "zsh: command not found: " + commands[0],
          ];
        });
    }
  };

  const handleLS = () => {
    const currentDir = getCurrentDirectory();
    if (currentDir && typeof currentDir === "object") {
      const files = Object.keys(currentDir);
      setPreviousCommands((previousCommands) => {
        return [...previousCommands, "executing ls " + files.join(" ")];
      });
    } else {
      setPreviousCommands((previousCommands) => {
        return [
          ...previousCommands,
          "executing ls Current directory not found",
        ];
      });
    }
  };

  const handleCD = (command, directory) => {
    if (command.length === 1) {
      setCurrentPath(["home", "visitor"]);
      return;
    }
    if (directory === "..") {
      if (currentPath.length > 0) {
        setCurrentPath((prevPath) => prevPath.slice(0, -1));
      }
    } else {
      const pathArray = directory.split("/");
      let newPath = [...currentPath];

      for (let i = 0; i < pathArray.length; i++) {
        const path = pathArray[i];
        if (path === "..") {
          if (newPath.length > 1) {
            newPath.pop();
          }
        } else if (path) {
          const currentDir = getCurrentDirectory(newPath);
          if (currentDir && currentDir[path]) {
            newPath.push(path);
          } else {
            setPreviousCommands((prevCommands) => [
              ...prevCommands,
              `executing cd Directory '${path}' not found`,
            ]);
            return;
          }
        }
      }

      setCurrentPath(newPath);
    }
  };

  const handleCat = (fileName) => {
    const currentDir = getCurrentDirectory();
    if (
      currentDir &&
      currentDir[fileName] &&
      currentDir[fileName].length > 0 &&
      typeof currentDir[fileName] === "string"
    ) {
      const content = currentDir[fileName];
      setPreviousCommands((previousCommands) => {
        return [...previousCommands, "executing cat " + content];
      });
    } else {
      setPreviousCommands((previousCommands) => {
        return [
          ...previousCommands,
          "executing cat File not found or is not a text file",
        ];
      });
    }
  };

  const getCurrentDirectory = (path = currentPath) => {
    let currentDir = mockDirectory;
    for (let i = 0; i < path.length; i++) {
      currentDir = currentDir[path[i]];
      if (!currentDir) {
        return null;
      }
    }

    console.log(currentDir);
    return currentDir;
  };

  const handleEnter = (command) => {
    setPreviousCommands((previousCommands) => {
      return [...previousCommands, command];
    });
    const commandArray = command.split(" ");

    if (commandArray.length > 0) {
      handleCommand(commandArray);
    }
    setCurrentCommand("");
  };

  return (
    <div className="App">
      <TextInputBox>
        {previousCommands.map((command, index) => {
          let temp = command.split(" ");
          if (temp[1] && (temp[1] === "cat" || temp[1] === "cow" || temp[1] === "hack") ) {
            temp[0] = "";
            temp[1] = ""
      
            command = temp.join(" ");
            return (
              <div
                key={index}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <span
                className="input"
                  style={{
                    color: "#008c00",
                    fontFamily: "Fira Code, monospace",
                    overflow: "visible",
                    whiteSpace: "pre-wrap",
                    textAlign: "left",
                  }}
                >
                  {`${command}`}
                </span>
              </div>
            );
          } else {
            return (
              <TextInput key={index} text={command} previousCommand={true} />
            );
          }
        })}
        <TextInput ref={inputRef}
          key={"hotInput"}
          onEnter={handleEnter}
          text={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
        />
      </TextInputBox>
    </div>
  );
}

export default App;

var browserCLI = [
  function (cmd) {
    switch (cmd.toLowerCase()) {
      case "c":
        term.echo("Trying to turn off the browser...")
        runWaitTimer(
          3,
          function () {
            term.echo("Goodbye.")
            term.pop()
          },
          "choose> "
        )
        break
      case "1":
        switch (player.loreId) {
          case 4:
            term.echo("Searching for some protips online...")
            runWaitTimer(
              30,
              function () {
                displayLore(5)
                showBrowseOptions()
              },
              "choose> "
            )
            break
          default:
            term.echo("Looking through the list of ISP ads...")
            runWaitTimer(
              10,
              function () {
                term.echo("After some searching you found the following AD.")
                term.echo("Having enough with your ancient morse-code based network?")
                term.echo("Now for just TWO money you can enjoy your brand new DIAL UP network, ORDER NOW!")
                term.echo("How to order: Run the network command included in your operating system with our ISPID 'dialup' and pay, our worker will get your internet upgraded instantly then.")
                term.echo("Note: By offering our service you accept our terms of service, and will have a 5 packet/s network, with up to 10000 packets of download/upload capacity, you must pay again once you reach that capacity.")
                term.echo("Dev note: You don't need to enter that ISPID thingy right now.")
                if (!player.storeProgramsBought.includes("network")) {
                  player.storeProgramsBought.push("network")
                  term.echo("\nnetwork command available")
                }
                showBrowseOptions()
              },
              "choose> "
            )
            break
        }
        break
      case "2":
        switch (player.loreId) {
          case 5:
            term.echo("Looking for tutorials online...")
            runWaitTimer(
              60,
              function () {
                displayLore(6)
                showBrowseOptions()
              },
              "choose> "
            )
            break
          case 6:
            term.echo("Looking for more tutorials online...")
            runWaitTimer(
              120,
              function () {
                displayLore(7)
                if (!player.storeProgramsBought.includes("learn")) {
                  player.storeProgramsBought.push("learn")
                  term.echo("\nlearn command available")
                }
                player.loreId++
                showBrowseOptions()
              },
              "choose> "
            )
            break
          case 9:
            term.echo("Looking for even more tutorials online...")
            runWaitTimer(
              30,
              function () {
                displayLore(10)
                if (player.skills.vi.level.eq(1)) {
                  player.skills.vi.level = new Decimal(2)
                  term.echo("\nvi skill unlocked.")
                  term.echo("You can now use the vi editor with simplfied controls")
                }
                showBrowseOptions()
              },
              "choose> "
            )
            break
          default:
            term.echo("Error: Invalid option.")
        }
        break
      default:
        term.echo("Error: Invalid option.")
    }
  },
  {
    prompt: "choose> ",
    greetings: ""
  }
]

function showBrowseOptions(startup = false) {
  term.echo()
  if (!startup) term.echo("What should you look for next?")
  term.echo("Options:")

  if (player.loreId == 4) {
    term.echo("1: How to solve captchas faster.")
  } else {
    term.echo("1: How to speed up your internet speed.")
  }

  if (player.loreId == 5) {
    term.echo("2: How to make an AI that does things for you.")
  } else if (player.loreId == 6) {
    term.echo("2: How to write code that does things for you.")
  } else if (player.loreId == 9) {
    term.echo("2: How to use the vi editor.")
  }

  term.echo("C: How to close the browser.")
  return ""
}

# FiveM Feedback / Suggestion Bot
Was made for
Zwanenburg Roleplay

A suggestion bot for fivem servers which I use. It is not perfect but it does work so that's all that matters :)

Ik weet dat dit niet perfect is en dat mijn code niet al te fantastisch is om naar te kijken en er zitten nog restanten in, maaar als je zin heb en mijn code te verbeteren be my guest zou ik zeggen.

## COMMANDS:
```
Accepteren: #suggestion accept <ID van het bericht> [eventuele reden van acceptatie] 
> Voorbeeld: #suggestion accept 832932137405513729 Goed idee hij zal worden toegevoed.

Weigeren #suggestion deny <ID van het bericht> [eventuele reden van weigering] 
> Voorbeeld: #suggestion deny 832932137405513729 Sorry maar dit is geen goeie suggestie.

In overweging brengen: #suggestion neutral <ID van het bericht> [eventuele reden van de overweging]
> Voorbeeld: #suggestion neutral 832932137405513729 dit zal besproken worden.
```

## CONFIG:
```
token                               -- Discord bot token
prefix
- members: "!"                      --prefix for member to execute a command
- admin: "#"                        --prefix for admins to execute a command
SUGGESTIONS
- suggestionChannel: "",            --channel id for server suggestions
- suggestionClothingChannel: "",    --channel id for clothing suggestions
- suggestionCarsChannel: "",        --channel id for car suggestions
BUGS
- bugsChannel: "",                  --channel id for bugs to be reported in
- bugLogs: ""                       --channel id for bugs to be displayed in
```

## Commands
- prefix-members + suggestion <suggestion>
- prefix-admin + suggestion <accept |neutral| deny> <id_message> [optional message]

# CHEAP AND GOOD GAME HOSTING
If you need good and cheap hosting https://dutchis.net

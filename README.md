# React + TypeScript + Vite

To build this I've used Claude Code. I made a single prompt, reviewed code before commiting anything. The prompt included clear instructions into which technologies to use, what are the ACs, reference images and instructions on how to iterate over it.

Asked Claude to show me the progress and confirm some stuff before calling it finished, we iterated a few times on small stuff like text color, some sizing and the organization of the code.

After a few minutes Claude actually managed to get a pretty good result, I handed the image links to it so it could actually use similar images to the reference site and a small Dockerfile so I could deploy the site in the VPS I am using currently

There are still things that are not pixel perfect to the reference but I believe it did most of the things and I didn't have much time to iterate a little bit more. The code quality was OK enough for the task.

On the other hand, there's a small issue with the SSl certificate on the server so probably the site will complaint, I didn't think it would be necessary to fix it, but if it is I can completely do it without any issues, or I could use a different service like Github pages to host the built React app as a static site
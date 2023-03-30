import React from 'react';
import Box from './common/Box';

function PageColumn() {
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="h-full font-serif overflow-y-auto scrollbar-none md:scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-neutral-700 scrollbar-track-transparent">
        <div className="h-full flex flex-col items-center gap-y-4">
          <Box fit className="flex flex-col items-center">
            <h1 className="text-3xl text-black dark:text-white">Title</h1>
            <p>Author</p>
          </Box>
          {/* eslint-disable max-len */}
          <Box fit>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id accumsan nisl, eu eleifend ligula. Pellentesque id mi libero. Pellentesque arcu dolor, efficitur eu placerat a, rutrum a eros. In at metus vitae sapien tempor convallis. Cras urna nisi, laoreet a ultrices sed, vestibulum vel dolor. Maecenas eget eros sit amet metus commodo accumsan. Mauris gravida, lectus id elementum convallis, orci neque congue tortor, id luctus lorem ex non justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In at mauris porta, lobortis nisi sed, pharetra risus. In dignissim, neque et laoreet molestie, risus diam faucibus justo, sed posuere elit quam congue lorem. Cras mauris nibh, convallis vestibulum viverra sed, sodales eget ante. Curabitur in aliquet lectus. Nam ut enim et erat ullamcorper fermentum quis non ante.</p>
          </Box>
          <Box fit>
            <p>In pretium molestie felis sit amet suscipit. Aliquam eu erat nec turpis cursus lobortis. Sed et velit lacus. Aenean pharetra convallis metus, quis posuere mi aliquam dignissim. Duis at lorem erat. Vestibulum congue sit amet risus sit amet dapibus. Praesent vestibulum molestie nulla ut blandit. Proin dignissim ornare vestibulum. Proin sagittis ornare dui, vel pulvinar metus eleifend ac. Quisque iaculis dapibus tristique.</p>
          </Box>
          <Box fit>
            <p>Maecenas vitae velit malesuada, accumsan nisl in, elementum magna. Nulla nisl dolor, tempor quis porttitor vel, accumsan eget dolor. Cras sollicitudin sit amet dui hendrerit tempor. Pellentesque in ornare leo, ac luctus turpis. Phasellus sapien ligula, tempor ut bibendum at, mollis et ex. Etiam commodo nibh vel pharetra egestas. Sed commodo dapibus risus ac semper. Nunc convallis euismod mauris, a hendrerit arcu. Maecenas sodales nulla ut metus fringilla malesuada. Curabitur in consectetur ante. In gravida augue eget diam tempus consectetur. Integer ut nunc non lorem dignissim egestas vitae eu turpis. Maecenas ipsum dui, egestas vitae ullamcorper ut, scelerisque in lorem.</p>
          </Box>
          <Box fit>
            <p>Nullam leo augue, iaculis sit amet velit ultrices, feugiat tristique lacus. Fusce ut convallis diam. Nunc ultricies sagittis tristique. Maecenas dignissim euismod luctus. Sed sed varius sem. Phasellus eget est dui. Sed eu tortor luctus, elementum turpis et, iaculis justo. Vestibulum lacinia, justo at aliquam condimentum, lacus purus congue orci, id iaculis sapien lectus sit amet lacus. Aliquam tristique vestibulum pulvinar. Ut eu ipsum in eros rhoncus scelerisque ac quis nulla.</p>
          </Box>
          <Box fit>
            <p>Vivamus feugiat id diam sit amet vulputate. Duis non lacinia sapien. Nunc porttitor luctus fringilla. Sed sit amet vestibulum nibh, et hendrerit odio. Aenean eu sollicitudin purus. Ut vitae magna et leo porttitor efficitur. Vivamus efficitur mi arcu, vel consequat elit rhoncus vitae. Etiam et erat enim. Suspendisse potenti.</p>
          </Box>
          <Box fit>
            <textarea placeholder="Write Here..." className="text-neutral-400 w-full h-fit bg-white dark:bg-neutral-800 focus:outline-none" />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default PageColumn;

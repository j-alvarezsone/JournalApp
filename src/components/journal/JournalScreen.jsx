import React from 'react';
import { NothingSelected, Sidebar } from '../journal';
import { NoteScreen } from '../notes';
const JournalScreen = () => {
  return (
    <div className='journal__main-content'>
      <Sidebar />

      <main>
        {/* <NothingSelected /> */}
        <NoteScreen />
      </main>
    </div>
  );
};

export default JournalScreen;

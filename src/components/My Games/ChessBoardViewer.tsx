import { useEffect, useRef } from 'react';
import LichessPgnViewer from 'lichess-pgn-viewer';
import 'lichess-pgn-viewer/dist/style.css'; // Optional, but recommended for styling

interface ChessBoardProps {
  pgn: string; // Accept PGN as a prop
}

const ChessBoardViewer: React.FC<ChessBoardProps> = ({ pgn }) => {
  const viewerRef = useRef<HTMLDivElement | null>(null); // Ref to attach the viewer

  useEffect(() => {
    // Ensure the viewer is initialized after the component is mounted
    if (viewerRef.current) {
      const lpv = LichessPgnViewer(viewerRef.current, {
        pgn, // Pass the PGN to the viewer
      });

      // Example: Using utilities after the viewer is initialized
      // To navigate to the first move
      lpv.goTo('first');

      // You can also use the viewer instance to interact with the game:
      // lpv.goTo('next');
      // lpv.flip();

      // You can access the current game state via:
      console.log(lpv.game);

      // Cleanup the viewer when the component is unmounted
    //   return () => {
    //     lpv.destroy(); // Cleanup the viewer instance
    //   };
    }
  }, [pgn]); // Reinitialize if PGN changes

  return <div ref={viewerRef} />; // Attach viewer to the div using the ref
};

export default ChessBoardViewer;
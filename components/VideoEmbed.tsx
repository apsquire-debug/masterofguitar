interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

export default function VideoEmbed({ videoId, title = 'Video' }: VideoEmbedProps) {
  if (!videoId) return null;

  // Support both YouTube and Vimeo
  const isVimeo = /^\d+$/.test(videoId);
  const embedUrl = isVimeo
    ? `https://player.vimeo.com/video/${videoId}`
    : `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="my-8">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

const IFrameBox = () => {

  const workingMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3507028465667!2d3.3515625!3d6.6018445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91c46b6c7f9b%3A0x1a2b3c4d5e6f7g8h!2s283a%Akin%20Olugbade%20Street%20Victoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1623456789012!5m2!1sen!2sng`;

  return (
    <div className="w-full">
      <div className="w-full h-[400px] md:h-[500px] overflow-hidden shadow-2xl">
        <iframe
          src={workingMapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location -   283a, Akin Olugbade Street Off Adeola Odeku Victoria Island,
              Lagos, Nigeria."
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default IFrameBox;

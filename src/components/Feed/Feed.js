import React from 'react';
import './Feed.scss';
import CreateAStory from '../Story/CreateAStory';
import Story from '../Story/Story';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__stories">
        <CreateAStory
          userAvatar="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/36441674_2087936414791185_3335645930501177344_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=JSwi-d2s9XgAX8u499_&_nc_ht=scontent.fsgn2-3.fna&oh=eda8d999d1e44ab097c284c3768f4363&oe=5F723AEE"
          image="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/118542331_1757761511040178_4978906879965168236_o.jpg?_nc_cat=105&_nc_sid=5b7eaf&_nc_ohc=iknfBA-BbEMAX8VVVrR&_nc_ht=scontent.fsgn5-1.fna&oh=57c54f1236f4b760984c9181a8ed1090&oe=5F75618C"
        />
        <Story
          userName="Châu Phạm"
          userAvatar="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/36441674_2087936414791185_3335645930501177344_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=JSwi-d2s9XgAX8u499_&_nc_ht=scontent.fsgn2-3.fna&oh=eda8d999d1e44ab097c284c3768f4363&oe=5F723AEE"
          image="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/118542331_1757761511040178_4978906879965168236_o.jpg?_nc_cat=105&_nc_sid=5b7eaf&_nc_ohc=iknfBA-BbEMAX8VVVrR&_nc_ht=scontent.fsgn5-1.fna&oh=57c54f1236f4b760984c9181a8ed1090&oe=5F75618C"
        />
        <Story
          userName="Châu Phạm"
          userAvatar="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/36441674_2087936414791185_3335645930501177344_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=JSwi-d2s9XgAX8u499_&_nc_ht=scontent.fsgn2-3.fna&oh=eda8d999d1e44ab097c284c3768f4363&oe=5F723AEE"
          image="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/118542331_1757761511040178_4978906879965168236_o.jpg?_nc_cat=105&_nc_sid=5b7eaf&_nc_ohc=iknfBA-BbEMAX8VVVrR&_nc_ht=scontent.fsgn5-1.fna&oh=57c54f1236f4b760984c9181a8ed1090&oe=5F75618C"
        />
        <Story
          userName="Châu Phạm"
          userAvatar="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/36441674_2087936414791185_3335645930501177344_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=JSwi-d2s9XgAX8u499_&_nc_ht=scontent.fsgn2-3.fna&oh=eda8d999d1e44ab097c284c3768f4363&oe=5F723AEE"
          image="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/118542331_1757761511040178_4978906879965168236_o.jpg?_nc_cat=105&_nc_sid=5b7eaf&_nc_ohc=iknfBA-BbEMAX8VVVrR&_nc_ht=scontent.fsgn5-1.fna&oh=57c54f1236f4b760984c9181a8ed1090&oe=5F75618C"
        />
        <Story
          userName="Châu Phạm"
          userAvatar="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/36441674_2087936414791185_3335645930501177344_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=JSwi-d2s9XgAX8u499_&_nc_ht=scontent.fsgn2-3.fna&oh=eda8d999d1e44ab097c284c3768f4363&oe=5F723AEE"
          image="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/118542331_1757761511040178_4978906879965168236_o.jpg?_nc_cat=105&_nc_sid=5b7eaf&_nc_ohc=iknfBA-BbEMAX8VVVrR&_nc_ht=scontent.fsgn5-1.fna&oh=57c54f1236f4b760984c9181a8ed1090&oe=5F75618C"
        />
      </div>
      {/* Post Form */}
      {/* Posts */}
    </div>
  );
};

export default Feed;

import React, { useState } from "react"

export default function Menu() {
    const [menu, setMenu] = React.useState(1);
  
    const toggleMenu = () => {
      setMenu((m) => {
        if (m === 3) return 1;
        return m + 1;
      });
    }
  
    return (
      <>
        <MenuItem menu={menu} />
        <button onClick={toggleMenu}>切换菜单</button>
      </>
    );
  }
  
  function MenuItem({ menu }) {
    switch (menu) {
      case 1:
        return <Users />;
      case 2:
        return <Chats />;
      case 3:
        return <Rooms />;
      default:
        return null;
    }
  }
  

const Foo = () => {
  return <div>foo</div>;
};
const Bar = () => {
  return <div>bar</div>;
};
const Default = () => {
  return <div>default</div>;
};

const statusMap = {
  foo: <Foo />,
  bar: <Bar />,
  default: <Default />
};

const App = () => {
  const [status] = useState('default')

  return (
    statusMap[status]
  )
}

condition ? <Component /> : null.


export default function AppIf() {
  const { isLoading, isError, list } = useList();

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error...</div>;
  } else {
    return <List list={list} />;
  }
}

export default function AppIf() {
  const { isLoading, isError, list } = useList();

  if (!list) return null;

  return (
    <List list={list} />
  );
}

export default function AppTernaryExpressions() {
  const isMobilePhone = true
  return (
    <>
      {isMobilePhone ? <div /> : <div />}
    </>
  )
}

export default function ConditionDemo() {
  const [loading] = useState(false)
  const [isLogin] = useState(true)
  const [hasAuth] = useState(false)

  return (
    <>
      {
        loading ?
          <div className="loading">
            loading
          </div> :
          <div className="content">
            {
              isLogin ?
                (
                  hasAuth ?
                    <div className="has-permission">
                      has-permission
                    </div> :
                    <div className="no-permission">You have no permission to operate</div>
                ) :
                <div className="go-login">Please login first</div>
            }
          </div>
      }
    </>
  )
}
